import { useContext } from "react"
import { Context } from "./Context"

export function ContextHook() {
 const context = useContext(Context)
 return context
}