import { redirect, fail } from "@sveltejs/kit"

export const actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData())

    try {
      await locals.pb.collection("users").create(data)
      await locals.pb.collection("users").requestVerification(data.email)
    } catch (e) {
      console.log(e)
      return fail(e.status, { error: e.message })
    }
    throw redirect(303, "/auth/login")
  },
}
