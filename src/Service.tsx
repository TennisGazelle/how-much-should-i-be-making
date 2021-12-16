import CodeIcon from '@mui/icons-material/Code';

interface ResourceProps {
    serviceType: 'gh_repo' | 'gcp_cr_service' | 'gcp_cb_trigger' | 'dockerimage',
    url: string,
    name: string
}

interface GithubRepoResourceProps extends ResourceProps {
    repoName: string,
    branchList: [],
    prodBranch?: string,
    stagingBranch?: string,
    developBranch?: string,
    latestReleaseVersion: string,
    language: 'python' | 'javascript' | 'typescript'
    webFramework?: 'flask' | 'node' | 'next' | 'express'
    serviceType: 'gh_repo'
}

interface CardProps {
    children?: any
    rows?: {
        header: string,
        value: any
    }[]
}

const Card = ({children, rows=[]}: CardProps) => {
    // return <div>hey there, i'm a {children}</div>
    return <div style={{
        display: "flex",
        alignItems: "center",
        padding: "10",
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, .1)",
        backgroundColor: "rgba(255, 255, 255, .1)"
    }}>
        <CodeIcon style={{
            display: 'inline-block',
            fontSize: '2.5rem',
            margin: '0 2rem'
        }}/>
        <ul style={{
            flex: 1,
            display: 'block',
            listStyle: 'none',
            margin: 0,
            padding: 0
        }}>
            {rows.map(row => {
                return <li style={{
                            display: 'block',
                            fontSize: '1.2rem',
                            lineHeight: '1.5',
                            color: '#7e8794'
                        }}> 
                            {row.header} 
                            <span style={{
                                display: 'block',
                                margin: '1.7rem 0 0 0',
                                padding: '0 1rem 0 0',
                                fontWeight: 600,
                                textAlign: 'right',
                                color: '#c1c6cb',
                            }}>
                                {row.value}
                            </span>
                        </li>
            })}
            
        </ul>
    </div>
}

const GithubRepoResource = (
    { 
        repoName, 
        branchList = [], 
        prodBranch = 'master', 
        stagingBranch = '',
        developBranch = '', 
        latestReleaseVersion = '1.0.0', 
        language='javascript', 
        webFramework='express',
    }: GithubRepoResourceProps) => {

    
    return <Card rows={[{'header': "Some Name", 'value': "Some Value"}, {'header': "Some Other Name", 'value': "Some Other Value"}]}>github repo</Card>
}

export type { GithubRepoResourceProps };

export {
    GithubRepoResource
}