"use client";


import React, { ReactNode } from "react";
import { VideoOverlayProvider } from "./VideoOverlayContext";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // TODO: Adicionar QueryClientProvider, ThemeProvider, Toaster aqui quando instalar dependências
  // Por enquanto, apenas passa children através
  return <VideoOverlayProvider>{children}</VideoOverlayProvider>;
}
