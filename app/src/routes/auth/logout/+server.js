import { redirect } from "@sveltejs/kit"

export const POST = ({ locals }) => {
  locals.pb.authStore.clear()
  locals.user = null
  throw redirect(303, "/auth/login")
}
