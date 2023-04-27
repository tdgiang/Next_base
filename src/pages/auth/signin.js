import { Button, Container } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({}) {
  const router = useRouter();
  async function onSubmit() {
    const response = await signIn("credentials", {
      redirect: false,
      email: "hello",
      password: "password",
      callbackUrl: "/",
    });
    console.log("response", response);
    if (response.ok) router.push(response.url);
  }

  return (
    <>
      <Container>
        <h1>Hello</h1>
        <Button onClick={onSubmit}>Signin</Button>
      </Container>
    </>
  );
}
