"use client"

import useAuthStore from "@/stores/authStore"


export default function Test() {
    const { user } = useAuthStore()


    return (
        <div>
            {
                user && user.name
            }
        </div>
    )
}