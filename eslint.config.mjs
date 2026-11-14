import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import stylistic from '@stylistic/eslint-plugin';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'@stylistic/indent': ['warn', 'tab'],
			'@stylistic/semi': ['warn', 'always'],
			'@stylistic/no-trailing-spaces': ['warn'],
			'@stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
			'@stylistic/no-multi-spaces': ['warn'],
		}
	}
]);

export default eslintConfig;
