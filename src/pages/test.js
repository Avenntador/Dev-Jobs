import style from "./test.module.scss";
import DetailLayout from "../layouts/DetailLayout";
import Button from "../components/Button";
import companyLogo from "/public/assets/logos/scoot.svg";
import Image from "next/image";

const Test = () => {
  return (
    <DetailLayout title="Test">
      <div className={`${style.aboutCompany} aboutCompany`}>
        <div className={style.aboutCompany__logo}>
          <Image src={companyLogo} width="81px" height="23px" />
        </div>
        <div className={style.aboutCompany__links}>
          <div className={style.aboutCompany__site}>
            <p className="heading-three aboutCompanyLabel">Scoot</p>
            <p className="paragraph">scoot.com</p>
          </div>
          <Button type="buttonSecondary" title="Company Site" />
        </div>
      </div>

      <div className={`${style.blank} blank`}>
        <p className="paragraph">1w ago &#8226; Part Time</p>
        <div className={style.blank__heading}>
          <h1 className="heading-one blankLabel">Senior Software Engineer</h1>
          <Button type="buttonPrimary" title="Apply Now" />
        </div>
        <p className={`${style.blank__location} location-label`}>
          United Kingdom
        </p>

        <div className={style.blank__section}>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
        </div>

        <div className={style.blank__section}>
          <h3 className="heading-three blankLabel">Requirements</h3>
          <p className="paragraph">
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </p>
          <ul className={style.blank__list}>
            <li>
              <p className="paragraph">Morbi interdum mollis sapien. Sed </p>
            </li>
            <li>
              <p className="paragraph">
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </p>
            </li>
            <li>
              <p className="paragraph">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </p>
            </li>
            <li>
              <p className="paragraph">Morbi interdum mollis sapien. Sed</p>
            </li>
          </ul>
        </div>
        <div className={style.blank__section}>
          <h3 className="heading-three blankLabel">What You Will Do</h3>
          <p className="paragraph">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <ul className={style.blank__list}>
            <li>
              <p className="paragraph">Morbi interdum mollis sapien. Sed </p>
            </li>
            <li>
              <p className="paragraph">
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </p>
            </li>
            <li>
              <p className="paragraph">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </p>
            </li>
            <li>
              <p className="paragraph">Morbi interdum mollis sapien. Sed</p>
            </li>
          </ul>
        </div>
      </div>
    </DetailLayout>
  );
};

export default Test;
