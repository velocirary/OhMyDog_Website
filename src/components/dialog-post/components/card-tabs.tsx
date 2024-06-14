import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { PostTab } from './post-tab'
import { ReportTab } from './report-tab'

export function CardTabs() {
  return (
    <Tabs defaultValue="post" className="w-full max-w-2xl space-y-2 pt-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="post">Post</TabsTrigger>
        <TabsTrigger value="report">Denunciar</TabsTrigger>
      </TabsList>

      <div className="rounded-md bg-muted p-4">
        <PostTab />
        <ReportTab />
      </div>
    </Tabs>
  )
}
