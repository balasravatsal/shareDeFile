import { UserButton } from "@clerk/nextjs"

export default function files() {
  return (
    <div>
      files
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
