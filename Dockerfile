FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY . .
WORKDIR /src/circle3coworkingspace
RUN dotnet restore
RUN dotnet publish "circle3coworkingspace.csproj" -c Release -o /src/publish

# المرحلة الثانية: إعداد بيئة التشغيل (Runtime)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# نسخ الملفات المنشورة من مرحلة البناء إلى مجلد العمل في بيئة التشغيل
COPY --from=build /src/publish .

# تحديد نقطة الدخول لتشغيل التطبيق
ENTRYPOINT ["dotnet", "circle3coworkingspace.dll"]
