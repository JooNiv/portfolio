import { BASE_API_URL } from '../config'

export async function fetchNotes() {
  const res = await fetch(`${BASE_API_URL}/notes`)
  if (!res.ok) throw new Error('Failed to fetch notes')
  return res.json()
}

export async function addNote(note) {
  const res = await fetch(`${BASE_API_URL}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  })
  if (!res.ok) throw new Error('Failed to add note')
  return res.json()
}

export async function deleteNote(id, token) {
  const res = await fetch(`${BASE_API_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  if (!res.ok) throw new Error('Failed to delete note')
}
