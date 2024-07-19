import { supabase } from "./supabase"

export async function guessTheIQ(setSubmitted, { course, name, rollNumber: roll_number, section, semester }, answers) {
  setSubmitted('loading')
  const { data, error } = await supabase
    .from('Know your intelligence')
    .insert([
      {
        name,
        roll_number,
        course,
        section,
        answers,
        semester: Number(semester)
      },
    ])
    .select()

  if (error) {
    setSubmitted('error')
  }

  if (data) { setSubmitted('success') }


}