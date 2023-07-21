import { Links } from "#data/links";
import Navlinks from "#components/build/global/navlink";
import Typo from "#components/build/global/typography";
//
//
export default function Error({
  id = "404",
  error = "Oups! La page que vous demandez n'existe pas.",
}) {
  //
  //
  const home = Links.find((Links) => {
    return Links.label === "home";
  });
  //
  //
  if (home) {
    //
    return (
      <section className="error">
        <Typo size="s0" balise="span" color="c7">
          {id}
        </Typo>

        <Typo size="s3" balise="span" color="c6">
          {error}
        </Typo>

        <Navlinks href={home.url} type={home.type}>
          <Typo
            size="s5"
            balise="span"
            color="c3"
            className="backHomeError404"
          >
            Retourner sur la page d’accueil
          </Typo>
        </Navlinks>
      </section>
    );
    //
  } else {
    //
    return <h1>Fail Link</h1>;
  }
}
