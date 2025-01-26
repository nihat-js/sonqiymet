"use client"

import  useAuthStore  from "@/stores/authStore"
// import useUserStore from "@/stores/userStore"
import { useEffect } from "react"

export default function StoreProvider({ user, children }) {
    const { loginAs } = useAuthStore()
    useEffect(() => {
        // loginAs({ id: 1, name: 'Nihattt' })
    }, [])
    return children
}