'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id?: number;
  name: string;
  tech: string;
  description: string;
  link: string;
  level: number;
  color: string;
  biomeColor?: string;
  characterType?: 'rex' | 'pterodactyl' | 'anky' | 'triceratops' | 'spinosaurus';
}

interface DinoGameProps {
  projects: Project[];
}

const DinoGame: React.FC<DinoGameProps> = ({ projects }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [revealedProject, setRevealedProject] = useState<Project | null>(null);
  const [level, setLevel] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);

  const gameStateRef = useRef({
    gameStarted: false,
    isGameOver: false,
    revealedProject: null as Project | null,
    level: 1,
    score: 0,
    dino: { x: 50, y: 150, width: 40, height: 40, dy: 0, jumpForce: 12, gravity: 0.6, grounded: true },
    obstacles: [] as { x: number, y: number, width: number, height: number, speed: number }[],
    frame: 0,
    speed: 8,
    nextObstacle: 80,
  });

  useEffect(() => {
    gameStateRef.current.gameStarted = gameStarted;
    gameStateRef.current.isGameOver = isGameOver;
    gameStateRef.current.revealedProject = revealedProject;
    gameStateRef.current.level = level;
    gameStateRef.current.score = score;
  }, [gameStarted, isGameOver, revealedProject, level, score]);

  const restartGame = () => {
    setScore(0);
    setLevel(1);
    setIsGameOver(false);
    setRevealedProject(null);
    
    gameStateRef.current = {
      gameStarted: true,
      isGameOver: false,
      revealedProject: null,
      level: 1,
      score: 0,
      dino: { x: 50, y: 150, width: 40, height: 40, dy: 0, jumpForce: 12, gravity: 0.6, grounded: true },
      obstacles: [],
      frame: 0,
      speed: 8,
      nextObstacle: 80,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleInput = (event: KeyboardEvent | TouchEvent) => {
      const isAlt = event instanceof KeyboardEvent && (event.code === 'AltLeft' || event.code === 'AltRight');
      const isSpace = event instanceof KeyboardEvent && event.code === 'Space';
      const isTouch = event instanceof TouchEvent;

      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (isSpace) {
        event.preventDefault();
      }

      if (isAlt || isSpace || isTouch) {
        const current = gameStateRef.current;
        if (!current.gameStarted) {
          setGameStarted(true);
          return;
        }
        if (current.revealedProject) {
          setRevealedProject(null);
          return;
        }
        if (current.isGameOver) {
          restartGame();
          return;
        }
      }

      const current = gameStateRef.current;
      if ((isSpace || isTouch) && current.dino.grounded && !current.isGameOver && !current.revealedProject) {
        current.dino.dy = -current.dino.jumpForce;
        current.dino.grounded = false;
      }
    };

    window.addEventListener('keydown', handleInput);
    window.addEventListener('touchstart', handleInput);

    const update = () => {
      const current = gameStateRef.current;
      if (!current.gameStarted || current.isGameOver || current.revealedProject) return;

      const { dino, obstacles, speed } = current;

      dino.dy += dino.gravity;
      dino.y += dino.dy;

      if (dino.y + dino.height > canvas.height - 20) {
        dino.y = canvas.height - 20 - dino.height;
        dino.dy = 0;
        dino.grounded = true;
      }

      current.frame++;
      if (current.frame > current.nextObstacle) {
        obstacles.push({
          x: canvas.width,
          y: canvas.height - 20 - 40,
          width: 20,
          height: 40,
          speed: speed
        });
        current.frame = 0;
        current.nextObstacle = Math.random() * (100 - speed * 2) + 50;
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= obs.speed;

        if (
          dino.x < obs.x + obs.width &&
          dino.x + dino.width > obs.x &&
          dino.y < obs.y + obs.height &&
          dino.y + dino.height > obs.y
        ) {
          setIsGameOver(true);
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
          const newScore = current.score + 10;
          setScore(newScore);

          const levelThreshold = current.level * 100;
          if (newScore >= levelThreshold) {
            const nextProj = projects.find(p => p.level === current.level + 1);
            if (nextProj) {
              setRevealedProject(nextProj);
              setLevel(l => l + 1);
              current.speed += 1;
            }
          }
        }
      }
    };

    const drawDino = (type: string, x: number, y: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      if (type === 'pterodactyl') {
        ctx.beginPath();
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillRect(x + w - 10, y + h / 2 - 2, 4, 4);
      } else if (type === 'anky') {
        ctx.fillRect(x, y + 10, w, h - 10);
        ctx.fillStyle = '#444';
        ctx.fillRect(x + 5, y, w - 10, 15);
      } else if (type === 'triceratops') {
        ctx.fillRect(x + 10, y, w - 10, h);
        ctx.beginPath();
        ctx.moveTo(x, y + h);
        ctx.lineTo(x + 15, y + h / 2);
        ctx.lineTo(x + 15, y + h);
        ctx.fill();
      } else if (type === 'spinosaurus') {
        ctx.fillRect(x, y + 10, w, h - 10);
        ctx.beginPath();
        ctx.moveTo(x + 5, y + 10);
        ctx.lineTo(x + w / 2, y - 5);
        ctx.lineTo(x + w - 5, y + 10);
        ctx.fill();
      } else {
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = '#000';
        ctx.fillRect(x + w - 15, y + 10, 5, 5);
      }
    };

    const gameLoop = () => {
      const current = gameStateRef.current;
      const currentProject = projects.find(p => p.level === current.level);
      const biomeColor = currentProject?.biomeColor || '#111';
      
      ctx.fillStyle = biomeColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.beginPath();
      for(let x=0; x<canvas.width; x+=20) { ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); }
      for(let y=0; y<canvas.height; y+=20) { ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); }
      ctx.stroke();

      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 20);
      ctx.lineTo(canvas.width, canvas.height - 20);
      ctx.stroke();

      const charType = currentProject?.characterType || 'rex';
      const charColor = currentProject?.color || '#bdff90';
      drawDino(charType, current.dino.x, current.dino.y, current.dino.width, current.dino.height, charColor);

      ctx.fillStyle = '#ff4444';
      current.obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      });

      ctx.fillStyle = '#bdff90';
      ctx.font = '20px "Courier New"';
      ctx.textAlign = 'right';
      ctx.fillText(`SCORE: ${current.score}`, canvas.width - 20, 30);
      ctx.fillText(`LEVEL: ${current.level}`, canvas.width - 20, 60);

      if (!current.gameStarted) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#bdff90';
        ctx.textAlign = 'center';
        ctx.font = '30px "Courier New"';
        ctx.fillText('PRESS ALT/SPACE TO START', canvas.width / 2, canvas.height / 2);
      }

      if (current.isGameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff4444';
        ctx.textAlign = 'center';
        ctx.font = '40px "Courier New"';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '20px "Courier New"';
        ctx.fillStyle = '#fff';
        ctx.fillText('PRESS ALT/SPACE TO RESTART', canvas.width / 2, canvas.height / 2 + 30);
      }

      update();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleInput);
      window.removeEventListener('touchstart', handleInput);
      cancelAnimationFrame(animationFrameId);
    };
  }, [projects]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={800} height={200} />
      
      {revealedProject && (
        <div className="project-modal">
          <div className="project-card border-accent">
            <h2 className="text-accent">{revealedProject.name}</h2>
            <p className="tech-stack">{revealedProject.tech}</p>
            <p className="desc">{revealedProject.description}</p>
            <a href={revealedProject.link} className="btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
            <p className="hint">Press ALT/SPACE to continue running</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .game-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #111;
          border: 1px solid #333;
          overflow: hidden;
        }
        canvas {
          display: block;
          width: 100%;
          height: auto;
        }
        .project-modal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          animation: fadeIn 0.3s ease;
        }
        .project-card {
          background: #1a1a1a;
          padding: 1rem;
          text-align: center;
          width: 90%;
          max-width: 300px;
          border: 1px solid var(--accent);
          max-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .project-card h2 {
          font-size: 1rem;
          margin: 0;
          color: var(--accent);
        }
        .tech-stack {
          font-size: 0.7rem;
          color: #888;
          margin: 2px 0;
        }
        .desc {
          font-size: 0.8rem;
          margin: 5px 0;
          line-height: 1.2;
          white-space: pre-wrap;
          overflow-y: auto;
          max-height: 60px;
        }
        .btn {
          display: inline-block;
          padding: 5px 10px;
          font-size: 0.7rem;
          margin-top: 5px;
          border: 1px solid var(--accent);
          color: var(--accent);
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn:hover {
          background: var(--accent);
          color: #000;
        }
        .hint {
          font-size: 0.6rem;
          color: #555;
          margin-top: 5px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default DinoGame;
