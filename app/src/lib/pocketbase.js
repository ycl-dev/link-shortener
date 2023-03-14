import { PUBLIC_POCKETBASE_URL } from "$env/static/public"
import Pocketbase from "pocketbase"

const pb = new Pocketbase(PUBLIC_POCKETBASE_URL)
export default pb
