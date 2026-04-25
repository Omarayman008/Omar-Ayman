import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM projects ORDER BY level ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const project = await request.json();
    const { name, tech, description, link, level, color, biomeColor, characterType } = project;
    
    const result = await query(
      `INSERT INTO projects (name, tech, description, link, level, color, biome_color, character_type) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [name, tech, description, link, level, color, biomeColor, characterType]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    await query('DELETE FROM projects WHERE id = $1', [id]);
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const project = await request.json();
    const { id, name, tech, description, link, level, color, biomeColor, characterType } = project;
    
    const result = await query(
      `UPDATE projects 
       SET name = $1, tech = $2, description = $3, link = $4, level = $5, color = $6, biome_color = $7, character_type = $8
       WHERE id = $9 
       RETURNING *`,
      [name, tech, description, link, level, color, biomeColor, characterType, id]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}
