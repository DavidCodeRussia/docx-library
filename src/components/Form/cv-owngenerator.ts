//@ts-nocheck
import { Document, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";

export class DocumentCreator {
  public create(educations): Document {
    const document = new Document({
      sections: [
        {
          children: [
            ...educations
              .map((education) => {
                const arr = [];
                arr.push(this.createInstitutionHeader(education.myText, education.myEmail));
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
          ],
        },
      ],
    });

    return document;
  }

  public createInstitutionHeader(institutionName: string, dateText: string): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: institutionName,
          bold: true,
        }),
        new TextRun({
          text: `\t${dateText}`,
          bold: true,
        }),
      ],
    });
  }
}
