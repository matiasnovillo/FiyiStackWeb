using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FiyiStackWeb.Areas.BasicCore.Protocols;
using FiyiStackWeb.Areas.CMSCore.Protocols;
using FiyiStackWeb.Areas.BasicCore.Services;
using FiyiStackWeb.Areas.CMSCore.Services;
using FiyiStackWeb.Library;
using System;
using FiyiStackWeb.Areas.FiyiStack.Protocols;
using FiyiStackWeb.Areas.FiyiStack.Services;
using SixLaborsCaptcha.Mvc.Core;
using FiyiStackWeb.Areas.BasicCulture.Services;
using FiyiStackWeb.Areas.BasicCulture.Protocols;
using FiyiStackWeb.Areas.BasicCore.Models;

namespace FiyiStackWeb
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddControllers();

            //JSON to TimeSpan configuration
            services.AddControllers()
        .AddJsonOptions(options =>
            options.JsonSerializerOptions.Converters.Add(new JsonToTimeSpan()));

            //JSON configuration to output field names in PascalCase. Example: "TestId" : 1 and not "testId" : 1
            services.AddControllers()
        .AddJsonOptions(options =>
            options.JsonSerializerOptions.PropertyNamingPolicy = null);

            services.AddHttpContextAccessor();

            //Area: BasicCore
            services.AddScoped<FailureProtocol, FailureService>();
            services.AddScoped<ParameterProtocol, ParameterService>();
            services.AddScoped<VisitorCounterProtocol, VisitorCounterService>();
            //Area: BasicCulture
            services.AddScoped<CityProtocol, CityService>();
            services.AddScoped<ProvinceProtocol, ProvinceService>();
            services.AddScoped<CountryProtocol, CountryService>();
            services.AddScoped<PlanetProtocol, PlanetService>();
            services.AddScoped<SexProtocol, SexService>();
            //Area: CMSCore
            services.AddScoped<UserProtocol, UserService>();
            services.AddScoped<MenuProtocol, MenuService>();
            services.AddScoped<RoleMenuProtocol, RoleMenuService>();
            services.AddScoped<RoleProtocol, RoleService>();
            //Area: FiyiStack
            services.AddScoped<FiyiStackProtocol, FiyiStackService>();
            services.AddScoped<BlogProtocol, BlogService>();
            services.AddScoped<CommentForBlogProtocol, CommentForBlogService>();
            services.AddScoped<ExampleProtocol, ExampleService>();

            services.AddMvc();
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
            });

            services.AddSixLabCaptcha(x =>
            {
                x.DrawLines = 0;
                x.NoiseRate = 0;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSession();

            app.UseHttpsRedirection();
            
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
