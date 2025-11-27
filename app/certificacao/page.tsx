"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Download, Share2, Calendar, CheckCircle2, Clock, TrendingUp, Target } from "lucide-react"

const completedCertificates = [
  {
    id: 1,
    title: "Fundamentos de Inteligência Artificial",
    course: "IA na Educação - Módulo 1",
    completedDate: "15 de Janeiro, 2025",
    issuer: "EduInclusiva",
    credentialId: "EDU-2025-001234",
    skills: ["IA", "Machine Learning", "Educação Digital"],
  },
  {
    id: 2,
    title: "Metodologias Ativas Aplicadas",
    course: "Pedagogia Inovadora",
    completedDate: "08 de Janeiro, 2025",
    issuer: "EduInclusiva",
    credentialId: "EDU-2025-001189",
    skills: ["Pedagogia", "Ensino Ativo", "Engajamento"],
  },
  {
    id: 3,
    title: "Acessibilidade Digital Básica",
    course: "Tecnologia Assistiva - Nível 1",
    completedDate: "22 de Dezembro, 2024",
    issuer: "EduInclusiva",
    credentialId: "EDU-2024-009876",
    skills: ["Acessibilidade", "WCAG", "Inclusão Digital"],
  },
]

const inProgressCertificates = [
  {
    id: 4,
    title: "IA Avançada na Educação",
    course: "Inteligência Artificial na Educação",
    progress: 65,
    estimatedCompletion: "Março 2025",
    remainingModules: 3,
  },
  {
    id: 5,
    title: "Gestão Educacional Moderna",
    course: "Gestão Educacional Inovadora",
    progress: 30,
    estimatedCompletion: "Abril 2025",
    remainingModules: 7,
  },
  {
    id: 6,
    title: "Avaliação Formativa",
    course: "Metodologias de Avaliação",
    progress: 15,
    estimatedCompletion: "Maio 2025",
    remainingModules: 9,
  },
]

const stats = [
  {
    label: "Certificados Conquistados",
    value: "7",
    icon: Award,
    color: "primary",
  },
  {
    label: "Em Progresso",
    value: "3",
    icon: Clock,
    color: "secondary",
  },
  {
    label: "Taxa de Conclusão",
    value: "92%",
    icon: TrendingUp,
    color: "accent",
  },
  {
    label: "Próxima Meta",
    value: "10",
    icon: Target,
    color: "primary",
  },
]

export default function CertificacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-balance sm:text-3xl">Certificações</h1>
          <p className="mt-2 text-sm text-muted-foreground text-pretty sm:text-base">
            Acompanhe seu progresso e conquiste certificados reconhecidos
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2 sm:p-6 sm:pb-2">
                  <CardTitle className="text-xs font-medium sm:text-sm">{stat.label}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <div className="text-xl font-bold sm:text-2xl">{stat.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="completed" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-grid">
            <TabsTrigger value="completed" className="text-xs sm:text-sm">
              Conquistados ({completedCertificates.length})
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="text-xs sm:text-sm">
              Em Progresso ({inProgressCertificates.length})
            </TabsTrigger>
          </TabsList>

          {/* Completed Certificates */}
          <TabsContent value="completed" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {completedCertificates.map((cert) => (
                <Card key={cert.id} className="overflow-hidden">
                  <div className="border-b border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary sm:h-12 sm:w-12">
                        <Award className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" aria-hidden="true" />
                      </div>
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                        Concluído
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-balance sm:text-xl">{cert.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{cert.course}</p>
                  </div>
                  <CardContent className="space-y-4 p-4 sm:p-6">
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>Concluído em {cert.completedDate}</span>
                      </div>
                      <div className="text-muted-foreground">
                        <span className="font-medium">ID:</span> {cert.credentialId}
                      </div>
                      <div className="text-muted-foreground">
                        <span className="font-medium">Emissor:</span> {cert.issuer}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs sm:text-sm">
                        <Download className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" aria-hidden="true" />
                        Baixar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs sm:text-sm">
                        <Share2 className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" aria-hidden="true" />
                        Compartilhar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* In Progress Certificates */}
          <TabsContent value="in-progress" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {inProgressCertificates.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 sm:h-12 sm:w-12">
                      <Clock className="h-5 w-5 text-secondary sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">{cert.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>Conclusão prevista: {cert.estimatedCompletion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" aria-hidden="true" />
                        <span>{cert.remainingModules} módulos restantes</span>
                      </div>
                    </div>
                    <Button className="w-full text-sm">Continuar Curso</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Achievement Banner */}
        <Card className="mt-6 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 sm:mt-8">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:p-8 sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary sm:h-16 sm:w-16">
              <Award className="h-6 w-6 text-primary-foreground sm:h-8 sm:w-8" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold sm:text-xl">Continue sua jornada de aprendizado</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Você está a apenas 3 certificados de alcançar a meta de 10 certificações
              </p>
            </div>
            <Button size="lg" className="w-full shrink-0 sm:w-auto">
              Explorar Cursos
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
