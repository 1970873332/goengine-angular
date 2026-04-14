import { EnvironmentProviders, NgModule } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import RouteConfig from "./Config";

export function routerModule(config: typeof RouteConfig) {
    config.title && (document.title = config.title);

    @NgModule({
        imports: [RouterModule.forRoot(config.routes)],
        exports: [RouterModule]
    })
    class Router { }

    return Router;
}

export function router(config: typeof RouteConfig): EnvironmentProviders {
    config.title && (document.title = config.title);

    return provideRouter(config.routes);
}