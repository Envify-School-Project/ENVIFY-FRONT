import type { StoryObj, Meta } from '@storybook/react';
import { DownloadButton } from './Download.button';
import { Group } from '@mantine/core';


const meta: Meta<typeof DownloadButton> = {
    title: 'components/Buttons/DownloadButton',
    component: DownloadButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            toc: true, // 👈 Enables the table of contents
        },
    },
    argTypes: {},
    decorators: [
        (Story) => (
            <Group>
                <Story />
            </Group>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof DownloadButton>;

export const Default: Story = {
    render: () => (
        <DownloadButton
            script={[
                "sudo apt update -y",
                "curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash",
                "sudo apt-get install mariadb-server mariadb-client -y",
                "sudo systemctl status mariadb",
                "sudo mysql_secure_installation",
            ]}
        />
    ),
};
