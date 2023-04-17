//@ts-nocheck
import { Document, Paragraph } from "docx";

export class DocumentCreator {
  public create(educations): Document {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "mock data",
            }),
            ...educations.map((education) => {
              const arr = [];
            }),
          ],
        },
      ],
    });

    return document;
  }
}
