import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export const metadata = {
    title: 'Uses',
    description: 'Stefan Dimitrijević’s daily tools for productivity and development—from mechanical keyboards to Docker, IDEs, and workflow essentials.',
    keywords: [
        'Stefan Dimitrijević',
        'Stefan Dimitrijevic',
        'Uses',
        'Development Tools',
        'Coding Setup',
        'Workstation',
        'JetBrains IDEs',
        'PhpStorm',
        'WebStorm',
        'PyCharm',
        'Visual Studio Code',
        'TablePlus',
        'Postman',
        'GitHub Desktop',
        'Sourcetree',
        'Docker',
        'XAMPP',
        'Chrome Extensions',
        'Slack',
        'Microsoft Teams',
        'Jira',
        'Ubuntu 24.04',
        'Windows 10',
        'Redragon Keyboard',
        'Redragon Mouse',
        'Google Chrome',
        'Firefox Developer Edition',
    ],
}

export default function Uses() {
    return (
        <SimpleLayout
            title="Software I use, gadgets I love, and other tools I recommend."
            intro="Here’s a detailed list of tools, software, and hardware that I use daily to stay productive, build software, and enjoy the workflow while coding."
        >
            <div className="space-y-20">
                <ToolsSection title="Workstation">
                    <Tool title="Windows 10 and Ubuntu 24.04">
                        I mainly use Windows 10 because of its compatibility with 3ds Max and Cinema 4D when working on
                        virtual tours for Getafeel. For development purposes, I switch to Ubuntu 24.04, which is
                        excellent for Docker and other development tasks.
                    </Tool>
                    <Tool title="Redragon Kala Mechanical Keyboard">
                        A reliable and customizable mechanical keyboard with RGB lighting that enhances my coding and
                        typing experience.
                    </Tool>
                    <Tool title="Redragon Cobra Gaming Mouse">
                        An ergonomic and precise mouse, perfect for long hours of work and navigation.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Code Editors and IDEs">
                    <Tool title="JetBrains IDEs: PhpStorm, WebStorm, and PyCharm">
                        I rely on JetBrains products for writing clean and efficient code. PhpStorm for PHP/Laravel
                        projects, WebStorm for JavaScript/React work, and PyCharm for Python-based projects.
                    </Tool>
                    <Tool title="Visual Studio Code">
                        A lightweight editor I use occasionally for quick edits or markdown files with various
                        extensions.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Development Tools">
                    <Tool title="TablePlus">
                        My go-to tool for working with databases. Its simplicity and speed make managing databases
                        seamless.
                    </Tool>
                    <Tool title="Postman">
                        Essential for testing APIs, Postman lets me debug, document, and test my backend endpoints
                        efficiently.
                    </Tool>
                    <Tool title="GitHub Desktop and Sourcetree">
                        I use GitHub Desktop for managing GitHub repositories efficiently, and Sourcetree for working
                        with Bitbucket repositories. Both tools help me visualize branches, commits, and manage version
                        control smoothly.
                    </Tool>
                    <Tool title="Docker">
                        I run development environments and manage containers to ensure consistency across projects.
                    </Tool>
                    <Tool title="XAMPP">
                        Perfect for quickly setting up a local server when working on PHP-based projects.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Browsers and Extensions">
                    <Tool title="Google Chrome">
                        My primary browser for development and testing, equipped with developer tools and extensions
                        like React Developer Tools, Angular DevTools, and Clockwork for debugging PHP and Laravel
                        applications.
                    </Tool>
                    <Tool title="Firefox Developer Edition">
                        An alternative browser for testing and debugging websites for cross-browser compatibility.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Productivity and Utilities">
                    <Tool title="Slack and Microsoft Teams">
                        Essential tools for seamless communication with clients, colleagues, and team members. Both
                        platforms help me stay connected and collaborate efficiently.
                    </Tool>
                    <Tool title="Jira">
                        My go-to tool for project management, tracking tasks, and maintaining agile workflows. Jira
                        helps me stay organized and ensures project deadlines are met.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
