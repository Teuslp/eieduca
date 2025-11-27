"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, TrendingUp, Award, Clock, ArrowRight, Users, Brain, Target } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-balance sm:text-3xl">Bem-vinda, Ana Clara</h1>
          <p className="mt-2 text-sm text-muted-foreground text-pretty sm:text-base">
            Continue sua jornada de aprendizado inclusivo e personalizado
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">2 novos esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+12% desde o mês passado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificados</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 em andamento</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas de Estudo</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42h</div>
              <p className="text-xs text-muted-foreground">Este mês</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2 lg:space-y-8">
            {/* Continue Learning */}
            <section aria-labelledby="continue-learning">
              <h2 id="continue-learning" className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
                Continue Aprendendo
              </h2>
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-primary/10 flex items-center justify-center p-6 sm:w-48 sm:p-8">
                      <Brain className="h-12 w-12 text-primary sm:h-16 sm:w-16" aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                      <div>
                        <CardTitle className="mb-2 text-base sm:text-lg">Inteligência Artificial na Educação</CardTitle>
                        <CardDescription className="mb-4 text-sm">
                          Aprenda como a IA pode personalizar o ensino e promover inclusão
                        </CardDescription>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-medium">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full sm:w-auto" asChild>
                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-secondary/10 flex items-center justify-center p-6 sm:w-48 sm:p-8">
                      <Users className="h-12 w-12 text-secondary sm:h-16 sm:w-16" aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                      <div>
                        <CardTitle className="mb-2 text-base sm:text-lg">Metodologias Ativas de Ensino</CardTitle>
                        <CardDescription className="mb-4 text-sm">
                          Explore técnicas inovadoras para engajar estudantes
                        </CardDescription>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-medium">40%</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-transparent sm:w-auto" variant="outline" asChild>
                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Recommended Courses */}
            <section aria-labelledby="recommended">
              <h2 id="recommended" className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
                Recomendados para Você
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent sm:h-12 sm:w-12">
                      <Target className="h-5 w-5 text-accent-foreground sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">Tecnologia Assistiva</CardTitle>
                    <CardDescription className="text-sm">
                      Ferramentas e recursos para acessibilidade digital
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/cursos">Explorar Curso</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                      <BookOpen className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">Gestão Educacional</CardTitle>
                    <CardDescription className="text-sm">
                      Práticas de qualidade e inovação institucional
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/cursos">Explorar Curso</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/cursos">
                    <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                    Explorar Cursos
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/biblioteca">
                    <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                    Acessar Biblioteca
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/certificacao">
                    <Award className="mr-2 h-4 w-4" aria-hidden="true" />
                    Meus Certificados
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Certificado conquistado</p>
                    <p className="text-xs text-muted-foreground">Fundamentos de IA - Há 2 dias</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <BookOpen className="h-4 w-4 text-secondary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Novo curso iniciado</p>
                    <p className="text-xs text-muted-foreground">Metodologias Ativas - Há 3 dias</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Meta alcançada</p>
                    <p className="text-xs text-muted-foreground">40h de estudo - Há 5 dias</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Precisa de Ajuda?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Nossa equipe está pronta para apoiar sua jornada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Falar com Suporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
