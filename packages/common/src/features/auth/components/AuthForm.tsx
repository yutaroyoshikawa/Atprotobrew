"use client";

import { AppButton } from "../../../core/components/AppButton";
import { AppCard } from "../../../core/components/AppCard";
import { AppForm, AppFormTrigger } from "../../../core/components/AppForm";
import { AppH1 } from "../../../core/components/AppH1";
import { AppInput } from "../../../core/components/AppInput";
import { AppLabel } from "../../../core/components/AppLabel";
import { AppText } from "../../../core/components/AppText";
import { AppVStack } from "../../../core/components/AppVStack";
import { useForm } from "@tanstack/react-form";
import { AtPassportLogin } from "../../../core/components/AtPassportLogin";
import { AppSeparator } from "../../../core/components/AppSeparator";

interface FormInputs {
  handle: string;
}

interface AuthFormProps {
  onSubmit?: (inputs: FormInputs) => Promise<void>;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const form = useForm({
    defaultValues: {
      handle: "",
    } satisfies FormInputs,
    onSubmit: (props) => onSubmit?.(props.value),
  });

  return (
    <AppCard>
      <AppVStack gap={30}>
        <AppVStack gap={4}>
          <AppH1>Atprotobrew</AppH1>
          <AppText>AT Protocol サービスランチャー</AppText>
        </AppVStack>

        <AppForm onSubmit={form.handleSubmit}>
          <AppVStack gap={20}>
            <AppVStack gap={3}>
              <form.Field name="handle">
                {(field) => (
                  <>
                    <AppLabel htmlFor={field.name}>ハンドル</AppLabel>
                    <AppInput
                      id={field.name}
                      prefix="@"
                      type="text"
                      value={field.state.value}
                      name={field.name}
                      onChange={(e) => {
                        if ("value" in e.target) {
                          field.handleChange(e.target.value);
                        }
                      }}
                      placeholder="user.bsky.social"
                      autoComplete="username"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      disabled={form.state.isSubmitting}
                    />

                    {!field.state.meta.isValid && (
                      <AppText kind="error" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </AppText>
                    )}
                  </>
                )}
              </form.Field>
            </AppVStack>

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <AppFormTrigger asChild disabled={!canSubmit}>
                  <AppButton type="submit" disabled={!canSubmit}>
                    {isSubmitting ? "リダイレクト中…" : "ログイン"}
                  </AppButton>
                </AppFormTrigger>
              )}
            />
          </AppVStack>
        </AppForm>

        <AppSeparator />

        <AtPassportLogin />
      </AppVStack>
    </AppCard>
  );
}
