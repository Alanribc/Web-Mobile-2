import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Parâmetro de busca é obrigatório.' }, { status: 400 });
  }

  const apiKey = process.env.TMDB_API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d3bb84ede80dc92a552c391613321c4b&query=${encodeURIComponent(query)}`);
  
  const data = await res.json();

  return NextResponse.json(data);
}
