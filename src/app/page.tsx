import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute rigth-2 top-2">
        <ModeToggle/>
      </nav>

      <aside className="hidden lg:block">
        <Image src="/login.png" alt="" width={554} height={832} />
      </aside>

      <section className="space-y-7" flex-col itens-center w-full>
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48"/>
        </svg>
        <h1 className="text-4xl font-extrabold uppercase">SPHERE</h1>

        <Tabs defaultValue="entrar">
          <TabsList>
            <TabsTrigger value="entrar"></TabsTrigger>
            <TabsTrigger value="Registrar"></TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="">
              <Label htmlFor="email">email</Label>
              <Input id="email"></Input>
              <Label htmlFor="Senha">Senha</Label>
              <Input id="password"></Input>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <p>Criar conta</p>
          </TabsContent>
        </Tabs>

        <Button>Entrar</Button>
      </section>

    </main>
  );
}
