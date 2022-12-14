// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getchangelog } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const changelog = async (args: string[]): Promise<string> => {
  const changelog = await getchangelog();
  return `Abriendo changelog de gitHub...\n
  ${changelog}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Uso: weather [ciudad]. Ejemplo: weather Almeria';
  }
  const weather = await getWeather(city);
  return weather;
};