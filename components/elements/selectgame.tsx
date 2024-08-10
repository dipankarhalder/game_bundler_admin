"use client";

import { Fragment, useState, useEffect } from "react";
import { HiOutlineColorSwatch, HiOutlineExternalLink } from "react-icons/hi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { appStorage } from "@/content/localstore";
import { gameList } from "@/content/gamedropdown";

const FormSchema = z.object({
  game: z.string({
    required_error: "Please select an email to display.",
  }),
});

export const SelectGame = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    localStorage.setItem(appStorage.MAIN_DROPDOWN_GAME, data.game);
    setSelectedGame(data.game);
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getLocalAccess =
        localStorage && localStorage.getItem(appStorage.MAIN_DROPDOWN_GAME);
      setSelectedGame(getLocalAccess);
      if (getLocalAccess === null) {
        setIsOpen(true);
      }
    }
  }, [selectedGame]);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(true)}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-slate-100">
          <HiOutlineColorSwatch className="text-gray-600 mr-3 w-[18px] h-[18px]" />
          {selectedGame && selectedGame !== "" ? selectedGame : "Game lists"}
          <em className="ml-5">
            <HiOutlineExternalLink className="text-blue-600 w-[13px] h-[13px]" />
          </em>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] selectGameDialog">
        <DialogHeader>
          <DialogTitle className="text-center mb-5 text-sm">
            Please select you favourite game
          </DialogTitle>
          <DialogDescription className="hidden">&nbsp;</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="flex flex-col">
              <div className="flex w-full items-center">
                <FormField
                  control={form.control}
                  name="game"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full px-5 h-12 [&>span]:line-clamp-none [&>span]:w-full [&>span]:text-left [&>span]:font-semibold">
                          <SelectValue
                            placeholder={
                              selectedGame && selectedGame !== ""
                                ? selectedGame
                                : "Please select a game"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {gameList.categories.map((game) => (
                              <Fragment key={game.groupId}>
                                <SelectLabel className="uppercase bg-blue-100 text-xs">
                                  {game.groupTitle}
                                </SelectLabel>
                                {game.items.map((item) => (
                                  <SelectItem
                                    value={item.title}
                                    key={item.id}
                                    className="py-2"
                                  >
                                    <p className="font-semibold text-xs text-left w-full mb-0 flex">
                                      <span className="font-medium w-[70px]">
                                        {item.id}
                                      </span>{" "}
                                      {item.title}
                                    </p>
                                  </SelectItem>
                                ))}
                              </Fragment>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="justify-center sm:justify-center">
              <Button type="submit">Save Game</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
