import { ProjectCard } from '@/components/ProjectCard';

export default function CurrentProjectsPage() {
  return (
    <div className="docs-content">
      <h1>Current Eval Projects</h1>
      <p>
        Central place for teams testing their AI tools. Each card links to the eval repo, dashboard, or
        documentation. Add your project here when you start a new eval stream/idea.
      </p>

      <div className="project-grid">
        <ProjectCard
          title="AI Eval Pipeline For JT"
          description="Using historical user data to evaluate the accuracy of the AI pipeline."
          href="https://github.com/JusticeAIUnit/justicetranscribe/tree/788-refactor-backend-to-allow-export-generate_full_crissa"
          notes="Project 1 - Evaluating multi-shots and One-shot CRISSA generation."
          notesHref="https://justiceuk.sharepoint.com/:w:/r/sites/JusticeAIUnit/_layouts/15/Doc.aspx?sourcedoc=%7B537F1805-8BD9-47BB-987A-664208958C3C%7D&file=JT%20System%20Evaluation%20Ideas.docx&action=default&mobileredirect=true"
          notes2="Project 2 - Evaluating CRISSA outputs using different AI Models"
          notes2Href="https://justiceuk.sharepoint.com/:w:/r/sites/JusticeAIUnit/_layouts/15/Doc.aspx?sourcedoc=%7BDA46390B-C091-4159-A7C6-D6B98810C18C%7D&file=Comparing%20CRISSA%20outputs%20using%20different%20AI%20Models%20-%20AI%20Evals%20JT%20project.docx&wdOrigin=TEAMS-MAGLEV.null_ns.rwc&action=default&mobileredirect=true"
          status="active"
          owner="Richard & Yasmin"
        />
        <ProjectCard
          title="Transcription evaluation for Justice Transcribe (Courts)"
          description="Evalutating the word of error rate in the transcriptions of the courts."
          href='https://justiceuk-my.sharepoint.com/:w:/g/personal/harry_giddens_justice_gov_uk/IQAll5PzpHwrSZvACX2XZX0QAbzgBvIUCV2nsBnuM6xD05M?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1773667677147&web=1'
          status="beta"
          owner="Harry"
        />
        <ProjectCard
          title="Probation Chatbot"
          description="AI eval pipeline for the probation chatbot."
          href="https://github.com/justiceuk/probation-chatbot/tree/main/eval"
          status="active"
          owner="Miranda"
        />
        <ProjectCard
          title="Documenting the Future of Our AI Testing Framework"
          description="Aiming for a collabrative library of evals and metrics for the Justice AI Unit."
          status="planned"
          owner="Justice AI Unit"
        />
         <ProjectCard
          title="Eval Dataset For Prison Transcribe"
          description="Aiming for a collabrative library of evals and metrics for the Justice AI Unit."
          status="planned"
          owner="Justice AI Unit"
        />
      </div>

      <p>
        <strong>Adding a project:</strong> Open a PR that adds a new entry to the project list (or update this
        page’s data source). Include project name, short description, owner, and link to eval/dashboard.
      </p>
    </div>
  );
}
