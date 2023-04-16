import { Document, Paragraph } from 'docx';

export class DocumentCreator {
  public create(): Document {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: 'Dolan Miu',
            }),
          ],
        },
      ],
    });

    return document;
  }
}
