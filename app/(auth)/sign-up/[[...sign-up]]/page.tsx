"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Loader, LoaderCircle, LoaderIcon } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="w-full justify-center flex items-center">
      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignUp.Step name="start">
                <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Créez votre compte
                    </CardTitle>
                    <CardDescription>
                      Bienvenu, remplissez vos informations pour commencer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="emailAddress" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label>Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label>Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignUp.Captcha className="empty:hidden" />
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <LoaderCircle className="size-4 animate-spin" />
                              ) : (
                                "Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignUp.Action>

                      <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        ou continuer avec
                      </p>
                      <div className="grid grid-cols-3 gap-x-2">
                        <Clerk.Connection name="facebook" asChild>
                          <Button
                            variant="outline"
                            className="dark:bg-slate-500"
                            type="button"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading scope="provider:facebook">
                              {(isLoading) =>
                                isLoading ? (
                                  <LoaderIcon className="size-4 animate-spin" />
                                ) : (
                                  <>
                                    <Clerk.Icon className="size-4 mr-2" />
                                    <span className="hidden md:block">
                                      Facebook
                                    </span>
                                  </>
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </Clerk.Connection>
                        <Clerk.Connection name="apple" asChild>
                          <Button
                            variant="outline"
                            className="dark:bg-slate-500"
                            type="button"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading scope="provider:apple">
                              {(isLoading) =>
                                isLoading ? (
                                  <LoaderIcon className="size-4 animate-spin" />
                                ) : (
                                  <>
                                    <Clerk.Icon className="size-4 mr-2" />
                                    <span className="hidden md:block">
                                      Apple
                                    </span>
                                  </>
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </Clerk.Connection>
                        <Clerk.Connection name="google" asChild>
                          <Button
                            variant="outline"
                            className="dark:bg-slate-500"
                            type="button"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading scope="provider:google">
                              {(isLoading) =>
                                isLoading ? (
                                  <LoaderIcon className="size-4 animate-spin" />
                                ) : (
                                  <>
                                    <Clerk.Icon className="size-4 mr-2" />
                                    <span className="hidden md:block">
                                      Google
                                    </span>
                                  </>
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </Clerk.Connection>
                      </div>

                      <Button variant="link" size="sm" asChild>
                        <Link href="/sign-in">
                          Vous êtes déjà membre? Connectez vous
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="continue">
                <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Continuez l&apos;enregistement
                    </CardTitle>

                    <CardDescription>
                      Vous y êtes presque, veuillez choisir un nom
                      d&apos;utilisateur
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Clerk.Field name="username" className="space-y-2">
                      <Clerk.Label>
                        <Label>Votre nom d&apos;utilisateur</Label>
                      </Clerk.Label>
                      <Clerk.Input type="text" required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Loader className="size-4 animate-spin" />
                              ) : (
                                "Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignUp.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                    <CardHeader>
                      <CardTitle>Vérifiez votre email</CardTitle>
                      <CardDescription>
                        Utilisez le lien de vérification qui vous a été envoyé
                        par mail
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <div className="grid items-center justify-center gap-y-2">
                        <Clerk.Field name="code" className="space-y-2">
                          <Clerk.Label className="sr-only">
                            Adresse mail
                          </Clerk.Label>
                          <div className="flex justify-center text-center">
                            <Clerk.Input
                              type="otp"
                              className="flex justify-center has-[:disabled]:opacity-50"
                              autoSubmit
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className={cn(
                                      "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                      {
                                        "z-10 ring-2 ring-ring ring-offset-background":
                                          status === "cursor" ||
                                          status === "selected",
                                      }
                                    )}
                                  >
                                    {value}
                                    {status === "cursor" && (
                                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                      </div>
                                    )}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className="block text-center text-sm text-destructive" />
                        </Clerk.Field>
                        <SignUp.Action
                          asChild
                          resend
                          className="text-muted-foreground"
                          fallback={({ resendableAfter }) => (
                            <Button variant="link" size="sm" disabled>
                              Vous n&apos;avez pas reçu de code? Renvoyer (
                              <span className="tabular-nums">
                                {resendableAfter}
                              </span>
                              )
                            </Button>
                          )}
                        >
                          <Button type="button" variant="link" size="sm">
                            Vous n&apos;avez pas reçu de code? Renvoyer
                          </Button>
                        </SignUp.Action>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Loader className="size-4 animate-spin" />
                                ) : (
                                  "Continuer"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignUp.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}
