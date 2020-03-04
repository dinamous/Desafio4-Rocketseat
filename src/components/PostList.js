import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          nameA: "Julio Alcantara",
          avatar:
            "https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              nameB: "Fernanda Albergue",
              avatar:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRinY4vLmj_JVTSedukEYnvTIWLVZFvY__GWupSreUQEkVnNw2H"
            },
            content: "Também gostaria de saber"
          },
          {
            id: 2,
            author: {
              nameB: "Alana Ribeiro",
              avatar:
                "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg"
            },
            content: "Sim eles estão procurando pessoas "
          }
        ]
      },
      {
        id: 2,
        author: {
          nameA: "Fernado Cintra",
          avatar:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/19/19b952baf75c85034108858df0ce37c752a1a574_full.jpg"
        },
        date: "03 Jun 2019",
        content:
          "Alguém já fez o módulo 5, estouo pesso num bug e não sei resolver",
        comments: [
          {
            id: 1,
            author: {
              nameB: "Alicia Braga",
              avatar:
                "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
            },
            content: "Em que parte exatamente?"
          },
          {
            id: 2,
            author: {
              nameB: "Henrique Alpino",
              avatar:
                "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg"
            },
            content:
              "Esse desafio não precisa ser entregue e não receberá correção, mas você pode ver o resultado do código do desafio aqui. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras."
          }
        ]
      }
    ]
  };
  render() {
    return (
      <>
        <div className="feed">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </>
    );
  }
}

export default PostList;
