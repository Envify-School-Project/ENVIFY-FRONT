import { ScriptDto } from '@/utils/types/script.type';
import { saveAs } from 'file-saver';
import { Button } from '.';

type Props = {
    scripts: ScriptDto[];
};

export const DownloadButton = ({ scripts }: Props) => {
    const downloadFile = () => {
        let content = '#!/bin/bash\n\n';

        scripts.forEach((script) => {
            content += `# ${script.script}\n${script.script}\n\n`;
        });

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'scripts.sh');
    };

    return <Button onClick={downloadFile}>Télécharger les scripts</Button>;
};