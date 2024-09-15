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
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                  <CardHeader>
                    <CardTitle className="text-xl">Connectez vous</CardTitle>
                    <CardDescription>
                      Bon retour, connectez vous pour continuer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="identifier" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label>Addresse mail</Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <LoaderIcon className="size-4 animate-spin" />
                              ) : (
                                "Continuer"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>

                      <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        ou continuez avec
                      </p>
                      <div className="grid grid-cols-3 gap-x-2">
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
                      </div>

                      <Button variant="link" size="sm" asChild>
                        <Link href="/sign-up">
                          Pas encore membre? Connectez vous
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name="choose-strategy">
                <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Utiliser une autre méthode
                    </CardTitle>
                    <CardDescription>
                      Vous avez un problème ? utilisez l&apos;une de ces
                      méthodes pour vous connecter
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <SignIn.SupportedStrategy name="email_code" asChild>
                      <Button
                        type="button"
                        variant="link"
                        disabled={isGlobalLoading}
                      >
                        Recevoir un code par mail
                      </Button>
                    </SignIn.SupportedStrategy>
                    <SignIn.SupportedStrategy name="password" asChild>
                      <Button
                        type="button"
                        variant="link"
                        disabled={isGlobalLoading}
                      >
                        Mot de passe
                      </Button>
                    </SignIn.SupportedStrategy>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action navigate="previous" asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <LoaderIcon className="size-4 animate-spin" />
                              ) : (
                                "Retour"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name="verifications">
                <SignIn.Strategy name="password">
                  <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Vérifiez votre boite mail
                      </CardTitle>
                      <CardDescription>
                        Entrez votre mot de passe pour continuer
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        Bon retour <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label>Mot de passe</Label>
                        </Clerk.Label>
                        <Clerk.Input type="password" asChild>
                          <Input />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <LoaderIcon className="size-4 animate-spin" />
                                ) : (
                                  "Continuer"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate="choose-strategy" asChild>
                          <Button type="button" size="sm" variant="link">
                            Utiliser une autre méthode
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>

                <SignIn.Strategy name="email_code">
                  <Card className="w-full max-w-[500px] dark:bg-slate-950/30">
                    <CardHeader>
                      <CardTitle>Vérifiez votre boite mail</CardTitle>
                      <CardDescription>
                        Entrez le code de vérifiction envoyé à votre adresse
                        mail
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        Bon retour <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <Clerk.Field name="code">
                        <Clerk.Label className="sr-only">
                          Code de vérification
                        </Clerk.Label>
                        <div className="grid gap-y-2 items-center justify-center">
                          <div className="flex justify-center text-center">
                            <Clerk.Input
                              type="otp"
                              autoSubmit
                              className="flex justify-center has-[:disabled]:opacity-50"
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                                  >
                                    {value}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className="block text-sm text-destructive text-center" />
                          <SignIn.Action
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
                            <Button variant="link" size="sm">
                              Vousn&apos;avez pas reçu de code? Renvoyer
                            </Button>
                          </SignIn.Action>
                        </div>
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <LoaderIcon className="size-4 animate-spin" />
                                ) : (
                                  "Continuer"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate="choose-strategy" asChild>
                          <Button size="sm" variant="link">
                            Utiliser une autre méthode
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
