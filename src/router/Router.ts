import { EnvironmentProviders, NgModule } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import RouteConfig from "./Config";

export function routerModule(config: typeof RouteConfig) {
    const { title = document.title } = config;

    document.title = title;

    @NgModule({
        imports: [RouterModule.forRoot(config.routes)],
        exports: [RouterModule],
    })
    class Router {}

    return Router;
}

export function router(config: typeof RouteConfig): EnvironmentProviders {
    const { title = document.title } = config;

    document.title = title;

    return provideRouter(config.routes);
}
