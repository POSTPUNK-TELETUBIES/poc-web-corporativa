'use client';
import { PropsWithChildren, useState } from "react";
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { pacificoDefaultTheme } from "ui-material";

export interface ThemeRegistry extends PropsWithChildren{
  options: any
}

export default function ThemeRegistry ({children, options}: Readonly<ThemeRegistry>){
  const [{cache, flush}] = useState(()=>{
    const innerCache =  createCache(options);
    innerCache.compat = true;

    const prevInsert = innerCache.insert;
    let inserted: string[] = [];
    innerCache.insert = (...args) => {
      const serialized = args[1];
      if (innerCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const innerFlush =  ()=>{
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    }

    return {
      cache: innerCache,
      flush: innerFlush
    }

  })

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) {
      return null;
    }

    const styles = names.reduce((acm, name)=> acm + cache.inserted[name], '');
  
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={pacificoDefaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
