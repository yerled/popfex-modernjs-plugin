import {
  IPluginContext,
  ForgedAPI,
  FileType,
} from '@modern-js/generator-plugin';

export default function (context: IPluginContext) {
  context.onForged(async (_api: ForgedAPI, _input: Record<string, unknown>) => {
    /**
     * todo
     */
  });

  context.onForged(async (api: ForgedAPI) => {
    api.addFile({
      type: FileType.Text,
      file: `src/haha/index.ts`,
      templateFile: `haha.ts.handlebars`,
      force: true,
    });

    api.addFile({
      type: FileType.Text,
      file: `src/xixi.ts`,
      templateFile: `haha.ts.handlebars`,
      force: true,
    });
  });
}
