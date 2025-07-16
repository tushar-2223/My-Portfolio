import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'views.json');

async function readData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // If the file doesn't exist, initialize with 0
    return { count: 0 };
  }
}

async function writeData(data: { count: number }) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error reading view count:', error);
    return NextResponse.json({ error: 'Failed to retrieve view count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const data = await readData();
    data.count += 1;
    await writeData(data);
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error incrementing view count:', error);
    return NextResponse.json({ error: 'Failed to increment view count' }, { status: 500 });
  }
}
