import { action, decorate, observable, runInAction } from "mobx";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import BlogService from "./Service";

function Store() {
  this.drawerState = false;
  this.blogService = BlogService;
  this.blogPosts = [];
  this.homePosts = [];
  this.firstPost = [];
  this.singlePost = [];

  this.toggleDrawer = () => {
    this.drawerState = !this.drawerState;
  };

  this.fetchBlogPosts = async () => {
    try {
      const response = await this.blogService.get();
      runInAction(() => {
        this.blogPosts = response;

        this.blogPosts.forEach((element) => {
          element.newDate = element.date
            ? format(parseISO(element.date), "do MMM yyyy")
            : "";
        });

        if (this.blogPosts.length > 4) {
          this.homePosts = [
            ...this.blogPosts.slice(this.blogPosts.body.length - 4),
          ];
        } else {
          this.homePosts = [...this.blogPosts];
        }

        this.firstPost.push(this.homePosts.pop());
        this.homePosts.replace(this.homePosts.slice().reverse());
        this.blogPosts.replace(this.blogPosts.slice().reverse());
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };
}

decorate(Store, {
  toggleDrawer: action,
  fetchBlogPosts: action,
  singlePost: observable,
  drawerState: observable,
  blogPosts: observable,
  homePosts: observable,
  firstPost: observable,
});

export default new Store();
