// List of commands that do not require API calls

import { formatDistanceToNow } from 'date-fns';
import packageJson from '../../../package.json';
import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `¡Bienvenidos! Aquí están todos los comandos disponibles:
\n${c}\n
[tab]: finalización del disparador.
[ctrl+l]/borrar: borrar terminal.\n
Escriba 'sumfetch' para mostrar el resumen.
`;
};

// Redirection
export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${config.repo}`, '_blank');
  }, 1000);
  return 'Iniciando repositorio de github...';
};  

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hola, yo soy ${config.name}. 
¡Bienvenidos a mi sitio web!
Más sobre mí:
'sumfetch' - breve resumen.
'resume' - mi portfolio.
'changelog' - mi changelog.`;
};

export const resume = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${config.resume_url}`, '_blank');
  }, 1000);
  return 'Iniciando resumen...';
};  

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Iniciando mailto:${config.email}...`;
};

export const github = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://github.com/${config.social.github}`, '_blank');
  }, 1000);  

  return 'Iniciando github...';
};

export const linkedin = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}`, '_blank');
  }, 1000);  

  return 'Iniciando linkedin...';
};

export const twitter = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
   window.open(`https://twitter.com/${config.social.twitter}`, '_blank');
  }, 1000);  

  return 'Iniciando twitter...';
};

export const instagram = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://www.instagram.com/${config.social.instagram}`, '_blank');
  }, 1000);   

  return 'Iniciando instagram...';
};

export const unsplash = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://unsplash.com/es/${config.social.unsplash}`, '_blank');
  }, 1000); 

  return 'Iniciando unsplash...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Buscando en google ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Buscando duckduckgo para ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `¿Wow en serio? Estás usando Bing para ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Buscando reddit para ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `biografia.txt
experiencia.txt
habilidades.txt
skills.txt
contacto.txt`;
};

export const cat = async (args: string[], callback?: (value: string) => string,): Promise<string> => {
if (args.length === 0) {
    return `Selecione un fichero`;
  }

  switch (args[0]) {
    case 'biografia.txt':
      return `${config.biografia}`;

    case 'experiencia.txt':
      return `${config.experiencia}`;

    case 'habilidades.txt':
      return `${config.habilidades}`;

    case 'skills.txt':
      return `${config.skills}`;

    case 'contacto.txt':
      return `${config.contacto}`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  return `Desafortunadamente, no puedo permitirme más directorios.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=gjeOZ4sR7qY', '_blank');
  return `Permiso denegado: Un gran poder conlleva una gran responsabilidad.`;
};

export const reboot = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.location.reload();
  }, 3000);   

  return 'Reiniciando sistema...';
};

export const lsb_release = async (args: string[]): Promise<string> => {
  const getPlatform = (): 'Unknown' | 'Windows' | 'MacOS' | 'Linux' => {
    let os: 'Unknown' | 'Windows' | 'MacOS' | 'Linux' = 'Unknown';
  
    if (navigator.userAgent.indexOf('Win') != -1) {
      os = 'Windows';
    }
  
    if (navigator.userAgent.indexOf('Mac') != -1) {
      os = 'MacOS';
    }
  
    if (navigator.userAgent.indexOf('Linux') != -1) {
      os = 'Linux';
    }
  
    return os;
  };
  const os = getPlatform();
  const visitedAt = new Date(
    localStorage.getItem('visitedAt') || new Date().toString(),
  );
  const packages = Object.keys(packageJson.dependencies);
  const devPackages = Object.keys(packageJson.devDependencies);
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;  

  return `
⠀⠀⠀⠀⠀⠀⣶⡶⠋⠀⣠⠀⠑⠖⠒⠒⠒⠯⣤⣦⡀⠹⣦⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢛⢶⡾⡇⠀⣠⣤⣀⠀⠀⠀⠀⠈⠙⠻⣞⡉⠀⠀⠀⠀⠀⠀
⠀⠠⣤⣄⣀⣀⡔⢡⠎⠀⠁⠎⠉⠉⢻⢷⣦⡀⠀⡄⠀⢢⣀⣹⡆⠀⠀⠀⠀⠀
⠀⠀⠈⠓⣤⣀⡇⡏⠀⠀⠀⠀⠀⠀⠸⣜⣓⣩⣿⠇⣠⡤⠭⢿⣇⡀⠀⠀⠀⠀              Host</span>: ${config.ps1_hostname}
⠀⠀⠀⠀⣿⠉⢸⠁⠀⠀⠀⣠⣴⣶⠏⣰⣦⡉⠁⠈⣄⡐⠛⢿⠇⠙⣦⡟⡄⠀              OS: ${os}
⠀⢀⣀⣼⠿⡄⢸⠀⠀⠀⡔⢹⡇⡿⢀⣿⣿⠙⣄⣠⠇⢳⡀⢠⣀⣠⣟⣠⢧⡀              Packages: ${packages.length + devPackages.length} (npm)
⠈⠛⠳⢤⣤⡇⢸⡀⠀⡼⠀⢸⠁⡇⢸⣿⢻⣰⢛⡿⠖⠛⠋⠉⠛⠛⠋⠁⠀⡷              Resolución: ${resolution}
⠀⠀⠀⠀⣿⡀⠸⣇⢀⠇⠀⠈⠀⢣⠘⡏⠀⣿⠏⠐⠋⠙⠒⠲⠶⠶⠶⢶⠛⠁              Licencia: ${packageJson.license}
⠀⠀⠀⠀⢸⡷⢦⢿⡌⠀⠀⠀⠀⠀⠄⠹⡚⠋⠀⠀⠀⠀⣠⢆⠀⣀⣠⡟⠀⠀              Version: ${packageJson.version}
⠀⠀⢀⣴⣯⡤⣬⡏⢷⡄⠀⠀⠀⠀⠀⠀⠁⢀⢀⣀⠀⣚⡵⠋⠉⠉⠁⠀⠀⠀              Tiempo de actividad: ${formatDistanceToNow(visitedAt,)}
⠀⠀⠀⠀⠀⠀⠈⠻⣦⣹⣮⡢⢄⣀⣀⣠⢀⣿⠟⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣷⣦⣭⠴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ███████╗ ████████╗██╗     ██╗███████╗████████╗
  ██╔════╝ ██╔═══██╗██║     ██║██╔══██╗╚══██╔══╝
  ██║  ███╗██║   ██║██║     ██║███████║   ██║   
  ██║   ██║██║   ██║██║     ██║██╔══██║   ██║   
  ╚██████╔╝╚██████╔╝███████╗██║██║  ██║   ██║   
   ╚═════╝  ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝   ╚═╝   v${packageJson.version}


Escriba 'help' para ver la lista de comandos disponibles.
`;
};
