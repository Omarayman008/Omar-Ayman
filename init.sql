CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    tech TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    level INTEGER NOT NULL,
    color TEXT NOT NULL,
    biome_color TEXT,
    character_type TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert default projects
INSERT INTO projects (name, tech, description, link, level, color, biome_color, character_type)
VALUES 
('Fluxer.Java', 'Java / Maven', 'High-performance administrative framework for Java applications with advanced automation features.', 'https://github.com/Omarayman008/fluxer.java', 1, '#bdff90', '#0a0f0a', 'rex'),
('Social-Media API', 'Node.js / Express', 'A scalable backend for social platforms featuring ffmpeg video processing and containerized deployment.', 'https://github.com/Omarayman008/Social-Media', 2, '#00fff9', '#050a10', 'pterodactyl'),
('Commander Bot', 'Java / JDA', 'Advanced Discord management system with auto-moderation, custom rank engine, and leveling system.', 'https://github.com/Omarayman008/commander-bot', 3, '#ff00c1', '#10050f', 'anky')
ON CONFLICT DO NOTHING;
