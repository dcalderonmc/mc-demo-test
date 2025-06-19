import sql from '@/lib/db';

export async function create(formData: FormData) {
  'use server';
  // Connect to the Neon database
  const comment = formData.get('comment');
  // Insert the comment from the form into the Postgres database
  await sql!`INSERT INTO comments (comment) VALUES (${comment})`;
}
