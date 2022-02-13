export class Profile {

    constructor(
        public avatar_url: string,
        public login: string,
        public bio: string,
        public html_url: string,
        public followers: number,
        public following: number,
        public public_repos: number
        
    ) {
  }
}