import Link from "next/link";
import Retroced from "@/components/layout/Retroced";

export default function PoliticUso() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10 text-slate-800">
      <header className="mb-8">
        <Retroced title="Termos de Uso" />
        <p className="mt-2 text-sm text-slate-600">Atualizado em 02 de junho de 2026</p>
      </header>

      <section className="space-y-5 text-sm leading-7 sm:text-base">
        <p>
          Ao acessar esta plataforma, voce concorda em utilizar os servicos de forma etica,
          respeitando as leis aplicaveis e as diretrizes da comunidade da Igreja Carvalho de
          Justica.
        </p>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Uso permitido</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Participar de atividades, eventos e conteudos disponibilizados pela plataforma.</li>
            <li>Manter seus dados de cadastro atualizados e verdadeiros.</li>
            <li>Preservar o respeito e a boa convivencia com outros usuarios.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Condutas nao permitidas</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Compartilhar conteudo ofensivo, ilegal ou que viole direitos de terceiros.</li>
            <li>Tentar acessar areas restritas ou comprometer a seguranca da aplicacao.</li>
            <li>Utilizar a plataforma para spam, fraude ou qualquer pratica abusiva.</li>
          </ul>
        </div>

        <p>
          O descumprimento destes termos pode resultar em suspensao temporaria ou definitiva do
          acesso.
        </p>
      </section>

      <footer className="mt-10 flex gap-5 text-sm">
        <Link href="/privacidade" className="underline">
          Politica de Privacidade
        </Link>
        <Link href="/login" className="underline">
          Voltar para Login
        </Link>
      </footer>
    </main>
  );
}