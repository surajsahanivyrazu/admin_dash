const e="https://surajsahanivyrazu.github.io/test-admin",t="@vyrazu-labs/ready-admin",i="@ready-admin",s="MIT",n="1.0.0",r="module",a={dev:"vite",start:"vite preview",predeploy:"npm run build",deploy:"gh-pages -d dist",build:"DISABLE_ESLINT_PLUGIN=true tsc && vite build",lint:'eslint "src/**/*.{js,jsx,ts,tsx}"',"lint:fix":'eslint --fix "src/**/*.{js,jsx,ts,tsx}"',"fm:check":'prettier --check "src/**/*.{js,jsx,ts,tsx}"',"fm:fix":'prettier --write "src/**/*.{js,jsx,ts,tsx}"',"rm:all":"rm -rf node_modules .next out dist build","re:start":"yarn rm:all && yarn install && yarn dev","re:build":"yarn rm:all && yarn install && yarn build","re:build-npm":"npm run rm:all && npm install && npm run build","dev:host":"vite --host"},p={"@emotion/cache":"^11.13.1","@emotion/react":"^11.13.3","@emotion/styled":"^11.13.0","@fontsource-variable/dm-sans":"^5.0.7","@fontsource/barlow":"^5.0.14","@fontsource/inter":"^5.1.0","@iconify/react":"^5.0.2","@mui/lab":"^5.0.0-alpha.173","@mui/material":"^5.16.7","@mui/x-data-grid":"^7.21.0","@mui/x-date-pickers":"^7.22.0","@tanstack/react-table":"^8.20.5","@tiptap/extension-bullet-list":"^2.8.0","@tiptap/extension-highlight":"^2.8.0","@tiptap/extension-horizontal-rule":"^2.8.0","@tiptap/extension-list-item":"^2.8.0","@tiptap/extension-ordered-list":"^2.8.0","@tiptap/extension-subscript":"^2.8.0","@tiptap/extension-superscript":"^2.8.0","@tiptap/extension-text-align":"^2.8.0","@tiptap/extension-underline":"^2.8.0","@tiptap/pm":"^2.8.0","@tiptap/react":"^2.8.0","@tiptap/starter-kit":"^2.8.0",apexcharts:"^3.52.0",dayjs:"^1.11.13","embla-carousel":"^8.3.0","embla-carousel-react":"^8.3.0",history:"^5.3.0",react:"^18.3.1","react-apexcharts":"^1.4.1","react-dom":"^18.3.1","react-dropzone":"^14.2.9","react-helmet-async":"^2.0.5","react-router-dom":"^6.26.1","simplebar-react":"^3.2.6","tiny-invariant":"^1.3.3"},l={"@types/node":"^22.5.0","@types/react":"^18.3.4","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^7.18.0","@typescript-eslint/parser":"^7.18.0","@vitejs/plugin-react-swc":"^3.7.0",eslint:"^8.57.0","eslint-config-airbnb":"^19.0.4","eslint-config-airbnb-typescript":"^18.0.0","eslint-config-prettier":"^9.1.0","eslint-import-resolver-typescript":"^3.6.1","eslint-plugin-import":"^2.29.1","eslint-plugin-jsx-a11y":"^6.9.0","eslint-plugin-perfectionist":"^2.11.0","eslint-plugin-prettier":"^5.2.1","eslint-plugin-react":"^7.35.0","eslint-plugin-react-hooks":"^4.6.2","eslint-plugin-unused-imports":"^3.2.0","gh-pages":"^6.3.0",prettier:"^3.3.3","sass-embedded":"^1.80.2",typescript:"^5.5.4",vite:"^5.4.2","vite-plugin-checker":"^0.7.2"},o={homepage:e,name:t,author:i,licence:s,version:n,private:!1,type:r,scripts:a,dependencies:p,devDependencies:l},c={appName:"Ready Admin",appVersion:o.version};export{c as C};
