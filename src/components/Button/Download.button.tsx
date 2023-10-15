'use client';
import { Button } from '@mantine/core';

type DownloadButtonProps = {
    script: string[];
};

export const DownloadButton = ({ script }: DownloadButtonProps) => {
    const downloadScript = () => {
        // Créez le contenu du fichier instal.sh en combinant les scripts
        const scriptContent = script.join('\n');

        // Créez un objet Blob contenant le contenu du script
        const blob = new Blob([scriptContent], { type: 'text/plain' });

        // Créez un objet URL pour le Blob
        const url = URL.createObjectURL(blob);

        // Créez un lien pour le téléchargement
        const a = document.createElement('a');
        a.href = url;
        a.download = 'instal.sh';
        a.click();

        // Libérez l'URL de l'objet Blob
        URL.revokeObjectURL(url);
    };

    return (
        <Button className="download-button" variant="outline" size="sm" onClick={downloadScript}>
            Télécharger le script
        </Button>
    );
};
