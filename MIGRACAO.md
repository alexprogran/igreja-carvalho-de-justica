# Igreja Carvalho de Justiça - Migração para Next.js

Bem-vindo ao novo projeto em **Next.js**! Este é o esqueleto pronto para receber componentes e funcionalidades do projeto Vite antigo.

## 📋 Checklist de Migração

**LEIA PRIMEIRO:** Abra `../checklistMigracao.txt` na raiz do repositório para o guia completo e específico.

## 🚀 Comece Aqui (5 minutos)

```bash
# 1. Entre no projeto
cd igreja-carvalho-de-justica

# 2. Confirme que o esqueleto está funcionando
npm run dev

# 3. Abra http://localhost:3000 no navegador
```

Se vir a página inicial padrão do Next.js, a configuração está OK.

## 📦 Próximas Etapas

### Fase 2-3: Configurar Tailwind e Instalar Dependências

1. Abra `checklistMigracao.txt` - FASE 2 (Configurar Tailwind)
   - Copie as variáveis CSS de `../src/index.css` para `app/globals.css`
   - Adicione tokens church.blue, church.green, etc. em `tailwind.config.ts`

2. Abra `checklistMigracao.txt` - FASE 3
   - Execute o comando `npm install` com todas as dependências reutilizáveis

### Fase 4-6: Copiar Componentes

1. Copie `../src/components/ui/*` para `components/ui/`
2. Copie `../src/lib/utils.ts` para `lib/utils.ts`
3. Copie `../src/hooks/` para `hooks/`
4. Copie componentes de apresentação (`BottomNav`, `DailyDevotion`, etc.) para `components/`

### Fase 7-9: Integrar Página Inicial

1. Recrie `components/NavLink.tsx` para Next.js (usar `next/link` + `usePathname`)
2. Crie `components/providers.tsx` com QueryClientProvider, ThemeProvider, Toaster
3. Copie conteúdo de `../src/pages/Index.tsx` para `app/page.tsx`
4. Atualize `app/layout.tsx` para importar providers e styles

### Fase 10: Verificar e Testar

```bash
npm run dev
# Acesse http://localhost:3000
# Confirme que estilos e componentes funcionam
```

## 🔧 Estrutura do Projeto

```
igreja-carvalho-de-justica/
├── app/
│   ├── layout.tsx         ← Adicione providers aqui
│   ├── page.tsx           ← Página inicial (copie de Index.tsx)
│   ├── not-found.tsx      ← Página 404 (copie de NotFound.tsx)
│   ├── globals.css        ← Tokens CSS (copie de index.css)
├── components/
│   ├── ui/                ← Componentes shadcn/ui (copie)
│   ├── providers.tsx      ← Crie com QueryClient, Theme, etc.
│   ├── NavLink.tsx        ← Recrie para Next.js
│   ├── BottomNav.tsx      ← Copie
│   ├── DailyDevotion.tsx  ← Copie
│   └── ... (demais componentes)
├── hooks/                 ← Copie de src/hooks/
├── lib/
│   ├── utils.ts           ← Copie de src/lib/
├── public/                ← Assets estáticos
├── package.json
├── tailwind.config.ts     ← Atualize com tokens
├── tsconfig.json          ← Alias @/* já configurado
└── next.config.ts
```

## 🔄 Substituições Importantes

### React Router → Next.js App Router

**Antes (Vite):**
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
```

**Depois (Next.js):**
```tsx
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
```

### Estrutura de Roteamento

**Antes (Vite):**
```
src/
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── App.tsx (com Routes)
```

**Depois (Next.js):**
```
app/
├── page.tsx (= rota /)
├── not-found.tsx (= 404)
└── [outros segmentos]/
    └── page.tsx
```

## 📝 Dicas Importantes

1. **"use client"**: Adicione no topo de componentes que usam:
   - `useState`, `useEffect`
   - Event listeners
   - Hooks customizados com estado
   - Qualquer coisa que dependa do navegador

2. **Server vs Client Components**:
   - Por padrão, componentes em `app/` são Server Components
   - Componentes em `components/` precisam de `"use client"` se usarem interação

3. **Variáveis de Ambiente**:
   - Crie `.env.local` se precisar (ex: API URLs)
   - Use `process.env.NEXT_PUBLIC_*` para variáveis públicas

4. **Build & Deploy**:
   - `npm run build` gera `.next/` otimizado
   - `npm start` inicia servidor em produção
   - Pronto para Vercel, Netlify, Docker, etc.

## 🧪 Validação

Após completar cada fase, execute:

```bash
npm run dev
# Veja se há erros de compilação

npm run build
# Veja se o build completa sem erros
```

## ❓ Problemas Comuns

**Erro: "Cannot find module 'react-router-dom'"**
- Remova qualquer import restante de react-router-dom
- Use `next/link` e `next/navigation` em vez disso

**Erro: "useState is not defined"**
- Adicione `"use client"` no topo do arquivo

**Tailwind não funciona**
- Certifique-se de que `app/globals.css` é importado em `app/layout.tsx`
- Verifique que `tailwind.config.ts` aponta para os arquivos certos

**Componentes shadcn/ui não renderizam**
- Confirme que todos os componentes `ui/` foram copiados
- Execute `npx shadcn-ui@latest add [component-name]` se faltar algum

## 📞 Próximos Passos Após Migração

1. Testar responsividade (mobile, tablet, desktop)
2. Configurar variáveis de ambiente (se necessário)
3. Adicionar testes (Jest ou Vitest)
4. Configurar CI/CD (GitHub Actions, etc.)
5. Deploy em produção

---

**Última atualização:** 23 de abril de 2026

Para dúvidas ou blockers, refira-se a `../checklistMigracao.txt` (versão completa).
