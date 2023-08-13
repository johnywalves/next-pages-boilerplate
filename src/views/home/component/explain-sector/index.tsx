import {
  ExplainHome,
  IlustrationExplainHome,
  TextExplainHome
} from './explain-sector.styles'

const ExplainSector = () => (
  <ExplainHome>
    <h2>Facilitating development</h2>
    <div>
      <IlustrationExplainHome>
        <picture></picture>
      </IlustrationExplainHome>
      <TextExplainHome>
        <p>
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
          elit. Duis felis ex, luctus eget euismod a, ornare sed dui.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nullam vitae pulvinar lorem, at dapibus arcu.
        </p>
        <p>
          <strong>Donec vitae nunc est</strong>. Maecenas gravida nec tellus
          hendrerit mattis. Donec et nibh non lacus laoreet semper. Maecenas
          efficitur bibendum libero eget consequat. Mauris ullamcorper nisi id
          pretium faucibus. Suspendisse vulputate lectus elit, nec vehicula ante
          tempus convallis.
        </p>
        <p>
          <strong>Praesent tempor placerat ante</strong>, quis luctus dolor
          consectetur nec. Integer luctus fringilla imperdiet. Praesent felis
          mauris, tincidunt at tortor vel, commodo ullamcorper neque.
        </p>
      </TextExplainHome>
    </div>
  </ExplainHome>
)

export default ExplainSector
