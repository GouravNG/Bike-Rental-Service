import { useCommonStore } from "@/store/common.store"
import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${useCommonStore.getState().token}`,
  },
})

export default apiClient
