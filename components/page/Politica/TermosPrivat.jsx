import Link from "next/link";
import Retroced from "@/components/layout/Retroced";

export default function TermosPrivat() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10 text-slate-800">
      <header className="mb-8">
       <Retroced title="Politica de Privacidade" />
        <p className="mt-2 text-sm text-slate-600">Atualizado em 02 de junho de 2026</p>
      </header>

      <section className="space-y-5 text-sm leading-7 sm:text-base">
        <p>
          Esta politica descreve como coletamos, usamos e protegemos seus dados ao utilizar os
          servicos da Igreja Carvalho de Justica.
        </p>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Dados que podemos coletar</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Informacoes de cadastro, como nome e e-mail.</li>
            <li>Dados de acesso e navegacao para melhorar a experiencia no aplicativo.</li>
            <li>Preferencias de uso para personalizacao de conteudos.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Como usamos os dados</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Viabilizar funcionalidades essenciais da plataforma.</li>
            <li>Enviar comunicacoes relevantes sobre eventos e atividades.</li>
            <li>Garantir seguranca, monitoramento e prevencao de uso indevido.</li>
          </ul>
        </div>

        <p>
          Nao comercializamos seus dados pessoais e adotamos boas praticas de seguranca para
          protecao das informacoes.
        </p>
      </section>

      <footer className="mt-10 flex gap-5 text-sm">
        <Link href="/termos" className="underline">
          Termos de Uso
        </Link>
        <Link href="/login" className="underline">
          Voltar para Login
        </Link>
      </footer>
    </main>
  );
}