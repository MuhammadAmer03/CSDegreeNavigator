import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const members = [
  {
    name: "Sofia Davis",
    email: "m@example.com",
    avatar: "/avatars/01.png",
    role: "Client",
  },
  {
    name: "Jackson Lee",
    email: "p@example.com",
    avatar: "/avatars/02.png",
    role: "Member",
  },
  {
    name: "Isabella Nguyen",
    email: "i@example.com",
    avatar: "/avatars/03.png",
    role: "Member",
  },
  {
    name: "Liam Smith",
    email: "liam@example.com",
    avatar: "/avatars/04.png",
    role: "Member",
  },
  {
    name: "Olivia Brown",
    email: "olivia@example.com",
    avatar: "/avatars/05.png",
    role: "Member",
  },
  {
    name: "Noah Wilson",
    email: "noah@example.com",
    avatar: "/avatars/06.png",
    role: "Member",
  },
  {
    name: "Emma Johnson",
    email: "emma@example.com",
    avatar: "/avatars/07.png",
    role: "Member",
  },
]

export default function TeamMembers() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md rounded-xl shadow">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 pt-0">
          {members.map((member, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="ml-auto text-xs">
                {member.role}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
